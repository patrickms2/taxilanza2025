<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxistasTable extends Migration
{
    public function up()
    {
        Schema::create('taxistas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_taxista")->nullable();
            $table->string

("id_user")->nullable();
            $table->string

("licencia_conducir")->nullable();
            $table->string

("apellidos")->nullable();
            $table->string

("dni")->nullable();
            $table->enum
("tipo", ["Prop.","Cond."],)->nullable();
            $table->string

("direccion")->nullable();
            $table->string

("telefono")->nullable();
            $table->timestamp

("fecha_registro")->nullable();
            $table->enum
("estado", ["Activo","Inactivo"],)->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('taxistas');
    }
}

