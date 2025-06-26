<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentosTable extends Migration
{
    public function up()
    {
        Schema::create('documentos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_documento")->nullable();
            $table->string

("user_id")->nullable();
            $table->string

("category_id")->nullable();
            $table->string

("nif")->nullable();
            $table->integer

("year")->nullable();
            $table->integer

("mes")->nullable();
            $table->string

("texto")->nullable();
            $table->string

("file_name")->nullable();
            $table->string

("file_path")->nullable();
            $table->enum
("estado", ["Activo","Inactivo"],)->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('documentos');
    }
}

